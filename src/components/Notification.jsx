import React, { useRef, useEffect } from 'react';
import { TiTick } from 'react-icons/ti';
import { useRecoilState } from 'recoil';
import NoteAtom from '../atoms/NoteAtom';
import EditAtom from '../atoms/EditAtom';

const NotificationM = ({  context }) => {
 const [note,setNote]=useRecoilState(NoteAtom);
 const [edit,setEdit]=useRecoilState(EditAtom);
 const isFirstRender = useRef(true); 

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false; 
            return; 
          }
    if (note || edit) {
      const timer = setTimeout(() => {
        setNote(false); 
        setEdit(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [note,edit,setEdit,setNote]);

  return (
    (note || edit) && (
        <div className={`absolute right-3 top-2 z-40 w-12 sm:w-72 border ${(context==="Added Successfully" || context==="Saved Successfully")?"border-green-500  text-green-800  bg-green-200":"border-red-500  text-red-800  bg-red-200" }  rounded-full py-1 sm:rounded-lg text-center flex items-center justify-center transition-all duration-100 gap-3`}>
        <h1 className="hidden sm:block">{context}</h1>
        <div className="flex items-center justify-center text-xl">
          <TiTick />
        </div>
        </div>
    )
  );
};

export default NotificationM;
