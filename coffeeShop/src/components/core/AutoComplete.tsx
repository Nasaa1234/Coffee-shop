/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Drop} from '../../assets';
import {Stack, Font, Margin} from './';
import {MoreInc} from '../../interfaces';

const Inc = ({
  name,
  closeModal,
  getInc,
  title,
}: {
  name: string;
  closeModal: any;
  getInc: () => void;
  title: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        closeModal();
        getInc(name, title);
      }}>
      <Stack style={styles.item} justifyContent="space-between">
        <Font size="16px">{name}</Font>
      </Stack>
    </TouchableOpacity>
  );
};

const Item = ({
  More,
  closeModal,
  active,
  title,
  getInc,
}: {
  More: any;
  closeModal: any;
  title: string;
  active: boolean;
  getInc: () => void;
}) => {
  const SPACING = 10;
  return (
    <Modal animationType="slide" transparent={true} visible={active}>
      <Margin style={styles.container1}>
        <Stack
          justifyContent="space-between"
          align="center"
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#D3A762',
            paddingBottom: 20,
          }}>
          <Font weight="bold" size="16px">
            {title}
          </Font>
          <TouchableOpacity onPress={closeModal}>
            <Font size={'25px'} weight="bold">
              X
            </Font>
          </TouchableOpacity>
        </Stack>
        <FlatList
          contentContainerStyle={{
            marginTop: SPACING * 2,
          }}
          ItemSeparatorComponent={() => <View style={{height: SPACING}} />}
          data={More}
          renderItem={({item, index}) => (
            <Inc
              name={item}
              key={index}
              closeModal={closeModal}
              getInc={getInc}
              title={title}
            />
          )}
        />
      </Margin>
    </Modal>
  );
};

interface Props {
  data?: string[];
  type: string;
  title: string;
  moreInc: MoreInc;
  getInc: any;
}
export const AutoComplete = (props: Props) => {
  const {data, type, title, moreInc, getInc} = props;
  const [active, setActive] = useState<boolean>(false);
  const closeModal = () => {
    setActive(false);
  };
  return (
    <View style={{marginTop: 5}}>
      <Stack margin={5}>
        <Font color="#969495" size="12px">
          {title}
        </Font>
      </Stack>
      <Stack
        align="center"
        style={[
          styles.container,
          {borderColor: active ? '#D3A762' : '#EAEAEA'},
        ]}
        justifyContent="space-between">
        <Font>{moreInc[title] + (type === 'count' ? ' shots' : '')}</Font>

        {type === 'drop' ? (
          <TouchableOpacity onPress={() => setActive(true)}>
            <Drop />
          </TouchableOpacity>
        ) : (
          <Stack>
            <TouchableOpacity>
              <Text style={styles.font}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.font, {marginHorizontal: 10}]}>1</Text>
            <TouchableOpacity>
              <Text style={styles.font}>+</Text>
            </TouchableOpacity>
          </Stack>
        )}
      </Stack>
      <View>
        <Item
          getInc={getInc}
          More={data}
          closeModal={closeModal}
          active={active}
          title={title}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  font: {
    fontSize: 20,
  },
  container1: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.7,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 15,
  },
});
