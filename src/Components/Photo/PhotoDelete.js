import React from 'react';
import UseFetch from '../../Hooks/UseFetch';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';

const PhotoDelete = ({id}) => {
   const {loading,request} = UseFetch();

   async function handleClick(){
      const confirm  = window.confirm('Tem certeza que deseja deletar?');
      if(confirm){
        const {url,options} = PHOTO_DELETE(id);
        const {response} = await request(url,options);
        if(response.ok) {
          window.location.reload();
        }
        }
    }

    return (
        <>
          {loading ? <button disabled className={styles.delete}>Deletar</button>:
                     <button onClick={handleClick} className={styles.delete}>Deletar</button>}
        </>
    )
}

export default PhotoDelete;
