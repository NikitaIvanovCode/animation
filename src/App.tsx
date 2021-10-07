import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './styles.module.css';

function App() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isFooter, setIsFooter] = useState<boolean>(false);
  const footerRef: any = useRef(null);

  useEffect(() => {
    setIsShow(true);
  }, []);

  const onScroll = () => {
    window.scrollY > 0 && setIsFooter(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div className={styles.app}>
      <CSSTransition
        in={isShow}
        timeout={0}
        classNames={{
          enterActive: styles.topEnter,
          enterDone: styles.topEnterActive,
        }}
        // unmountOnExit
        // mountOnEnter
      >
        <div className={styles.block} />
      </CSSTransition>
      <div ref={footerRef}>
        <CSSTransition
          in={isFooter}
          timeout={0}
          classNames={{
            enterActive: styles.bottomEnter,
            enterDone: styles.bottomEnterActive,
          }}
          unmountOnExit
          mountOnEnter
        >
          <div className={styles.footer} />
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
