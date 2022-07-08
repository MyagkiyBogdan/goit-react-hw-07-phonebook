import { Watch } from 'react-loader-spinner';
import styles from './Spiner.module.css';

const Spiner = ({ width, height, color }) => {
  return (
    <span className={styles.spiner}>
      <Watch height={width} width={height} color={color} ariaLabel="loading" />
    </span>
  );
};

export default Spiner;
