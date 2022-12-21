/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CarousalImage, Comment, Post, Subscribe} from '../components';
import {Footer} from '../layout';
import {Stack} from '../styles/Stack';
import {instance} from '../utils/axios';
import {LikeIcon, UpIcon} from '../assets/icon';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {useData} from '../providers/DataProvider';

export const Detail = ({route}) => {
  const navigation = useNavigation();
  const {AddComment, DeleteComment, succes, data, postId} = useData();
  const [value, setValue] = useState(null);
  const [dataDetail, setData] = useState();
  const [like, setLike] = useState(null);
  const [morePost, setMore] = useState(null);
  const [seeComment, setSeeComment] = useState({
    add: false,
    delete: false,
  });
  const doubleTapRef = useRef();
  const {date} = route.params;

  useEffect(() => {
    const getPostDetail = async () => {
      console.log(postId);
      const res = await instance.get(`/post/${postId}`);
      setData(res.data.message);
    };
    getPostDetail();
  }, [postId, succes]);

  const getValue = e => {
    setValue(e);
  };

  useEffect(() => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    setMore(shuffled?.slice(0, 5));
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      {dataDetail ? (
        <ScrollView>
          <View style={[Stack.row, Stack.center, Stack.spaceBetween]}>
            <Text style={styles.title}>{dataDetail?.title}</Text>
            <Pressable onPress={() => setLike(true)}>
              {like ? <LikeIcon stroke="red" fill="orange" /> : <LikeIcon />}
            </Pressable>
          </View>
          <View style={Stack.row}>
            {dataDetail?.tags?.map((name, index) => {
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
            ref={doubleTapRef}
            numberOfTaps={2}
            onActivated={() => {
              setLike(prev => !prev);
            }}>
            <View>
              <CarousalImage data={dataDetail} />
            </View>
          </TapGestureHandler>
          <Text style={styles.body}>{dataDetail?.description}</Text>
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
                onPress={() => AddComment(value, postId)}>
                Post Comment
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.comments}>
            <View style={Stack.row}>
              <Text style={styles.view}>
                View All Comments ({dataDetail?.comments?.length})
              </Text>
              <TouchableOpacity
                style={{...styles.icon, ...Stack.center}}
                onPress={() => setSeeComment(!seeComment)}>
                <UpIcon up={!seeComment} />
              </TouchableOpacity>
            </View>
            <View style={styles.commentContainer}>
              {seeComment &&
                dataDetail?.comments?.map((text, index) => {
                  return (
                    <Comment
                      data={text}
                      postId={postId}
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
            <Text style={{fontSize: 30, textAlign: 'center', marginTop: 10}}>
              More News for you
            </Text>
            {morePost.map((post, index) => {
              return <Post data={post} key={index} />;
            })}
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
