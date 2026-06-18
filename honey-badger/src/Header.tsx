import honey_badger_logo from './assets/honey_badger_logo.svg';
import hexa from './assets/hexa.svg';
import badger_sad from './assets/badger_sad.svg';
import badger_sad_2 from './assets/badger_sad_2.svg';
import badger_sad_3 from './assets/badger_sad_3.svg';
import badger_sad_4 from './assets/badger_sad_4.svg';
import badger_sad_5 from './assets/badger_sad_5.svg';
import badger_sad_6 from './assets/badger_sad_6.svg';
import badger_sad_7 from './assets/badger_sad_7.svg';
import badger_sad_8 from './assets/badger_sad_8.svg';
import badger_sad_9 from './assets/badger_sad_9.svg';
import badger_sad_10 from './assets/badger_sad_10.svg';
import badger_sad_final from './assets/badger_sad_final.svg';

import { useEffect, useState, type SetStateAction } from 'react';

interface HeaderProps {
  gameOver: SetStateAction<boolean>;
}

function Header({gameOver}: HeaderProps) {
  const [logPic, setLogPic] = useState(honey_badger_logo);

  useEffect(() => {
    if (gameOver === true) {
      setTimeout(() => {setLogPic(badger_sad)}, 750);
      setTimeout(() => {setLogPic(badger_sad_2)}, 860);
      setTimeout(() => {setLogPic(badger_sad_3)}, 920);
      setTimeout(() => {setLogPic(badger_sad_4)}, 980);
      setTimeout(() => {setLogPic(badger_sad_5)}, 1040);
      setTimeout(() => {setLogPic(badger_sad_6)}, 1100);
      setTimeout(() => {setLogPic(badger_sad_7)}, 1160);
      setTimeout(() => {setLogPic(badger_sad_8)}, 1220);
      setTimeout(() => {setLogPic(badger_sad_9)}, 1280);
      setTimeout(() => {setLogPic(badger_sad_10)}, 1340);
      setTimeout(() => {setLogPic(badger_sad_final)}, 1400);
    } else {
      setLogPic(honey_badger_logo)
    }
  }, [gameOver]);
  

  return (
    <header className="header">
        <img src={logPic} className="header-icon" alt="Honey Badger Icon" width="200" height="200"/>
      <h1>Honey Badger</h1>
    </header>
  );
}

export default Header;