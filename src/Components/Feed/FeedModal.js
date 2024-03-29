import React from 'react';
import { PHOTO_GET } from '../../api';
import UseFetch from '../../Hooks/UseFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import styles from './FeedModal.module.css';

const FeedModal = ({photo,setModalPhoto}) => {
    const {data,error,loading,request} = UseFetch();

    React.useEffect(()=>{
        const {url,options} = PHOTO_GET(photo.id);
        request(url,options)

    },[photo,request]);
    console.log(data)

    function handleOutsideClick(event){
      if(event.target === event.currentTarget){
        setModalPhoto(null)
      }
    }

    return (
        <div onClick={handleOutsideClick} className={styles.modal}>
         {error && <Error error={error}/>}
         {loading && <Loading/>}
         {data && <PhotoContent data={data}/>}
        </div>
    )
}

export default FeedModal
