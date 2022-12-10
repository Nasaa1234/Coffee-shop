/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CarousalImage, Comment, Subscribe} from '../components';
import {Footer} from '../layout';
import {Stack} from '../styles/Stack';
import {instance} from '../utils/axios';
import {UpIcon} from '../assets/icon';
import {TapGestureHandler} from 'react-native-gesture-handler';

export const Detail = ({route}) => {
  const navigation = useNavigation();
  const [value, setValue] = useState();
  const [data, setData] = useState();
  const [seeComment, setSeeComment] = useState({
    add: false,
    delete: false,
  });
  const [succes, setSucces] = useState();
  const {id, date} = route.params;

  useEffect(() => {
    const getPostDetail = async () => {
      const res = await instance.get(`/post/${id}`);
      setData(res.data.message);
    };
    getPostDetail();
  }, [id, succes]);

  const getValue = e => {
    setValue(e);
  };

  const AddComment = text => {
    instance
      .put('/post/writeComment', {
        comments: text,
        postId: id,
      })
      .then(() => setSucces({...succes, add: !succes?.add}));
  };

  const DeleteComment = index => {
    instance
      .delete('/post/deleteComment', {
        commentId: index,
        postId: id,
      })
      .then(() => setSucces({...succes, delete: !succes?.delete}));
  };

  const MorePost = arr => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  return (
    <SafeAreaView style={styles.container}>
      {data ? (
        <ScrollView>
          <Text style={styles.title}>{data?.title}</Text>
          <View style={Stack.row}>
            {data?.tags?.map((name, index) => {
              return (
                <View style={styles.tag} key={index}>
                  <Text
                    style={{
                      color: '#2e9ff8',
                    }}>
                    {name}
                  </Text>
                </View>
              );
            })}
          </View>
          <TapGestureHandler
            onActivated={() => {
              console.log('Activated');
            }}>
            <CarousalImage data={data} />
          </TapGestureHandler>
          <Text style={styles.body}>{data?.description}</Text>
          <View style={styles.written}>
            <Text style={styles.published}>Published {date}</Text>
            <Text>by Nasaa</Text>
            <Text
              style={styles.back}
              onPress={() => navigation.navigate('Home')}>
              Back to top
            </Text>
          </View>
          <View>
            <View style={{...Stack.row, marginTop: 20}}>
              <Text style={styles.comment}>Add your comment</Text>
              <View style={styles.separator} />
            </View>
            <TextInput
              style={styles.input}
              value={value}
              placeholder="Enter your comment here.."
              onChangeText={e => getValue(e)}
            />
            <TouchableOpacity style={styles.appButtonContainer}>
              <Text
                style={styles.appButtonText}
                onPress={() => AddComment(value)}>
                Post Comment
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.comments}>
            <View style={Stack.row}>
              <Text style={styles.view}>
                View All Comments ({data?.comments?.length})
              </Text>
              <TouchableOpacity
                style={{...styles.icon, ...Stack.center}}
                onPress={() => setSeeComment(!seeComment)}>
                <UpIcon up={!seeComment} />
              </TouchableOpacity>
            </View>
            <View style={styles.commentContainer}>
              {seeComment &&
                data?.comments?.map((text, index) => {
                  return (
                    <Comment
                      data={text}
                      id={index}
                      key={index}
                      DeleteComment={DeleteComment}
                    />
                  );
                })}
            </View>
          </View>
          <Subscribe />
          <View>
            <Text>More News for you</Text>
          </View>
          <View style={styles.footer}>
            <Footer />
          </View>
        </ScrollView>
      ) : (
        <View style={{...Stack.center, height: '80%'}}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  input: {
    height: 40,
    borderWidth: 0.2,
    padding: 10,
    backgroundColor: '#F4F9F8',
    borderColor: '#072D4B',
    borderRadius: 4,
    marginVertical: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#2F9FF8',
    borderRadius: 4,
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  comments: {
    marginVertical: 20,
  },
  arrowBtnText: {
    fontSize: 40,
  },
  tag: {
    marginRight: 10,
    padding: 4,
    backgroundColor: '#c7e1f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 20,
  },
  appButtonText: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  published: {
    color: '#072D4B',
    opacity: 0.3,
  },
  icon: {
    width: 23.94,
    height: 23.94,
    borderRadius: 13,
    backgroundColor: '#2F9FF8',
    marginLeft: 10,
  },
  written: {
    alignItems: 'center',
    marginTop: 50,
  },
  separator: {
    width: 185,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  comment: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  back: {
    color: '#2F9FF8',
    marginTop: 20,
    textDecorationLine: 'underline',
    textDecorationColor: '#2F9FF8',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  body: {
    color: '#072D4B',
    opacity: 0.6,
    fontSize: 17,
    lineHeight: 28,
  },
  footer: {
    marginVertical: 20,
    marginBottom: 50,
  },
  view: {
    color: '#2F9FF8',
    fontWeight: '500',
    fontSize: 17,
    textDecorationLine: 'underline',
    lineHeight: 20,
  },
  commentContainer: {
    marginTop: 10,
  },
});
