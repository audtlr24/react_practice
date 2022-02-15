import Post from './model/post';

export default function createFakeData(){
    const posts =[...Array(40).keys()].map(i=>({
        title: `포스트 #${i}`,
        body: '가상 데이터',
        tags: ['가짜','데이터'],
    }));
    Post.insertMany(posts,(err,docs)=>{
        console.log(docs);
    });
}