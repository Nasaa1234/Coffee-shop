/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
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
import {Comment, Subscribe} from '../components';
import {Footer} from '../layout';
import {Stack} from '../styles/Stack';
import {instance} from '../utils/axios';

export const Detail = ({route}) => {
  const [value, setValue] = useState();
  const [data, setData] = useState();
  const [seeComment, setSeeComment] = useState(true);
  const [comment, setComment] = useState([
    {
      text: 'hello',
      user: 'John Wall',
      posted_on: 'Jul 5, 2021 | 6:22 AM',
      reply: [
        {
          text: 'Hi',
          user: 'Nasanbat',
          posted_on: 'Jul 5, 2021 | 7:22 AM',
        },
      ],
    },
  ]);
  const {id} = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const getPostDetail = async () => {
      const res = await instance.get(`/${id}`);
      console.log(res.data);
      setData(res.data.message);
    };
    getPostDetail();
  }, [id]);

  const getValue = e => {
    setValue(e);
  };

  const AddComment = text => {
    if (!text) {
      return;
    }
    setComment([...comment, {text}]);
    setValue('');
  };

  const DeleteComment = index => {
    setComment(comment.filter((_, ind) => ind !== index));
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
          <Text style={styles.body}>{data?.yummy}</Text>
          <Image
            source={{
              uri: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=400&fit=crop&dpr=1%20600w,%20https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=600&h=400&fit=crop&dpr=2%201200w,%20https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=15&auto=format&w=600&h=400&fit=crop&dpr=3%201800w,%20https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1%20754w,%20https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=754&h=502&fit=crop&dpr=2%201508w,%20https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=15&auto=format&w=754&h=502&fit=crop&dpr=3%202262w',
            }}
            style={{
              width: 400,
              height: 300,
            }}
          />
          <View>
            <Text style={styles.body}>{data?.description}</Text>
          </View>
          <View style={styles.written}>
            <Text style={styles.published}>Published {data?.publishDate}</Text>
            <Text>
              by {data?.owner?.firstName} {data?.owner?.lastName}
            </Text>
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
            <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={() => AddComment(value)}>
              <Text style={styles.appButtonText}>Post Comment</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.comments}>
            <Text
              style={styles.view}
              onPress={() => setSeeComment(!seeComment)}>
              View All Comments ({comment.length}) ^
            </Text>
            <View style={styles.commentContainer}>
              {seeComment &&
                comment.map((text, index) => {
                  return (
                    <Comment
                      data={text}
                      DeleteComment={DeleteComment}
                      id={index}
                      key={index}
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
  tag: {
    marginRight: 10,
    width: 48,
    height: 22,
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
    marginTop: 40,
  },
});
