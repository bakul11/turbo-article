import React from 'react';
import { useForm } from 'react-hook-form';
import auth from './../../../Firebase/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetAllCommnet from './GetAllCommnet';



const Comment = ({id}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);
    const userDisplayName = user?.displayName;

    const onSubmit = data => {
        const commnet = data?.commnetTiltle;

        const postCommentData = {
            commnet: commnet,
            userDisplayName: userDisplayName,
            postId:id
        }

        //post comment 
        const url = `https://whispering-ridge-30056.herokuapp.com/doComment`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postCommentData)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Comment Successfully Done');
                reset();
            })
    }

    return (
        <div className='mt-5 mb-5'>
            <div className='comment-box'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row gy-2">
                        <div className="col-lg-12">
                            <textarea {...register("commnetTiltle", { required: true })} rows='3' className='form-control' placeholder='Write Commnets .....' />
                            {errors.commnetTiltle && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="col-lg-6">
                            <input type="submit" value='Submit Now' className='btn btn-primary' />
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
            {/* load comment  */}
            <GetAllCommnet id={id} />
        </div>
    );
};

export default Comment;