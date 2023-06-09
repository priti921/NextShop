import { FC, MutableRefObject, useEffect, useRef } from "react";
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

interface Props {
  children: any;
  isOpen: boolean;
  onClose: () => void;
}

//--SIDEBAR FOR ALL SIDEBAR RELATED COMPONENTS--
//handles scrolling based on sidebar state( close/open )
const Sidebar: FC<Props> = ({ children, isOpen, onClose }) => {
  //rendering a ref object to access the current element
  const ref = useRef() as MutableRefObject<HTMLDivElement>; //calling useRef with a generic type

  useEffect(() => {
    //disable or enable body scroll depending on isOpen state
    if (ref.current) {
      if (isOpen) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    //clears all the locks
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]); //runs when isOpen changes

  return (
    <>
      {/* renders when sidebar is open */}
      {isOpen ? (
        // referencing component
        <div ref={ref} className="fixed inset-0 overflow-hidden h-full z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div
              onClick={onClose} //when clicked, close sidebar
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none">
              <div className="h-full md:w-screen md:max-w-md">
                <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : // renders when sidebar is closed
      null}
    </>
  );
};

export default Sidebar;
