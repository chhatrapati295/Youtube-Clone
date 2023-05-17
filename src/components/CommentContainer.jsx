import React from 'react'

const commentsData = [
    {
        name : 'Akshay Saini',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        replies : [
            {
                name : 'Akshay Saini',
                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies : [
                    {
                        name : 'Akshay Saini',
                        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        replies : [
                            {
                                name : 'Akshay Saini',
                                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                replies : [
                                    {
                                        name : 'Akshay Saini',
                                        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                        replies : [
                                            {
                                                name : 'Akshay Saini',
                                                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                                replies : []
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name : 'Akshay Saini',
                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies : [
                    {
                        name : 'Akshay Saini',
                        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        replies : []
                    },
                    {
                        name : 'Akshay Saini',
                        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        replies : []
                    },
                ]
            },
        ]
    },
    {
        name : 'Akshay Saini',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        replies : []
    },
    {
        name : 'Akshay Saini',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        replies : [
            {
                name : 'Akshay Saini',
                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies : []
            },
            {
                name : 'Akshay Saini',
                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies : [
                    {
                        name : 'Akshay Saini',
                        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        replies : []
                    },
                    {
                        name : 'Akshay Saini',
                        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        replies : []
                    },
                ]
            },
            {
                name : 'Akshay Saini',
                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies : []
            },
            {
                name : 'Akshay Saini',
                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies : []
            },
        ]
    },
    {
        name : 'Akshay Saini',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        replies : []
    },
    {
        name : 'Akshay Saini',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        replies : [
            {
                name : 'Akshay Saini',
                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies : []
            },
            {
                name : 'Akshay Saini',
                text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                replies : []
            },
        ]
    },
]
const CommentContainer = () => {
  return (
    <div className='my-4 h-1/3'>
      <h1 className="font-bold text-lg">Comments : </h1>
      {/* <Comment data={commentsData[0]}/> */}
      <div className=" ">
        <CommentList data={commentsData} />
      </div>
    </div>
  )
}
const Comment = ({data})=>{
    const{name,text} = data
    return(
        <div className="flex gap-2 bg-gray-200 text-xs p-2 rounded my-1">
            <img
          className="h-7"
          src="https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
            <div className="flex flex-col">
                <span className="font-semibold">{name}</span>
                <span className="">{text}</span>
            </div>
        </div>
    )
}
const CommentList = ({data})=>{
    return data.map((comment,index) =>{
            return <div>
            <Comment data={comment} key={index}/>
            <div className="ml-6 border-l-2 pl-1">
            <CommentList data={comment.replies} />
            </div>
            </div>
        })
}
export default CommentContainer
