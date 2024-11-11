import React, { useRef, useEffect } from 'react';
import { TiTick } from 'react-icons/ti';
import { useRecoilState } from 'recoil';
import NoteAtom from '../atoms/NoteAtom';
import EditAtom from '../atoms/EditAtom';

const NotificationM = ({  context ,top }) => {
 const [note,setNote]=useRecoilState(NoteAtom);
 const [edit,setEdit]=useRecoilState(EditAtom);
 const isFirstRender = useRef(true); 

 useEffect(() => {
    if (isFirstRender.current) {
        isFirstRender.current = false; 
        return; 
      }
if (note || edit ) {
  const timer = setTimeout(() => {
    setNote(false); 
    setEdit(false);
  }, 1500);
  return () => clearTimeout(timer);
}
}, [note,setNote,edit,setEdit]);


  return (
    <>
      {note && (
        <div
          className={`absolute right-3 top-${top} z-40 w-72 hidden sm:block border border-green-500 text-green-800 bg-green-200 rounded-full py-1 sm:rounded-lg transition-all duration-100 gap-3`}
        >
          <div className="text-center flex items-center justify-center">
            <h1 className="hidden sm:block">{context}</h1>
            <div className="flex items-center justify-center text-xl">
              <TiTick />
            </div>
          </div>
        </div>
      )}
  
      {edit && (
        <div
          className={`absolute right-3 top-${top} z-40 w-72 hidden md:block border border-red-500 text-red-800 bg-red-200 rounded-full py-1 sm:rounded-lg transition-all duration-100 gap-3`}
        >
          <div className="text-center flex items-center justify-center">
            <h1 className="hidden sm:block">{context}</h1>
            <div className="flex items-center justify-center text-xl">
              <TiTick />
            </div>
          </div>
        </div>
      )}
    </>
  );
  
};

export default NotificationM;
