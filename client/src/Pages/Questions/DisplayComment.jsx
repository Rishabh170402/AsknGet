import React ,{useState,Component} from 'react'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Avatar from '../../components/Avatar/Avatar'
import { deleteComment } from '../../actions/question'

const DisplayComment = ({question, handleShare}) => {
    
    const User = useSelector((state) => (state.currentUserReducer))
    const { id } = useParams()
     
    const dispatch = useDispatch()
    const handleDelete = (commentId, noOfComments) => {
        dispatch(deleteComment(id, commentId, noOfComments - 1))
    }
    
    const state={
        isEditing:false
    };
   const toggleEditing =()=>{
        this.setState({
            isEditing: !this.state.isEditing
        });
    };
    
    if(this.state.isEditing){
        return "Editing";
    }
    return (
        <div>
            {
                question.comment.map((com) => (
                    <div className="display-com" key={com._id}>
                        <p>{com.commentBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type="button" onClick={handleShare}>Share</button>
                                {
                                    User?.result?._id === com?.userId && (
                                        <button type='button' onClick={() => handleDelete(com._id, question.noOfComments )}>Delete</button>
   
                                    )
                                    }
                                    {
                                    User?.result?._id === com?.userId && (
                                    <button type='button'  onClick={this.toggleEditing}>Edit</button>
                                      
                                    )
                                    }
                                   
                            </div>
                            <div>
                                <p>commented {moment(com.commentedOn).fromNow()}</p>
                                <Link to={`/Users/${com.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                    <Avatar backgroundColor="lightgreen" px='8px' py='5px' borderRadius='4px'>{com.userCommented.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {com.userCommented}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayComment
