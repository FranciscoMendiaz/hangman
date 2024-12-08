import styles from './figure.module.css';

interface Props {
  lives: number;
}

function Figure({ lives }: Props) {
  return (
    <svg
      role="figure-component"
      height="250"
      width="200"
      className={styles.container}
    >
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* <!-- Head --> */}
      {lives < 6 && (
        <circle data-cy="head" role="head" cx="140" cy="70" r="20" />
      )}
      {/* <!-- Body --> */}
      {lives < 5 && (
        <line role="figure-body" x1="140" y1="90" x2="140" y2="150" />
      )}
      {/* <!-- Arms --> */}
      {lives < 4 && (
        <line role="left-arm" x1="140" y1="120" x2="120" y2="100" />
      )}
      {lives < 3 && (
        <line role="right-arm" x1="140" y1="120" x2="160" y2="100" />
      )}
      {/* <!-- Legs --> */}
      {lives < 2 && (
        <line role="left-leg" x1="140" y1="150" x2="120" y2="180" />
      )}
      {lives < 1 && (
        <line role="right-leg" x1="140" y1="150" x2="160" y2="180" />
      )}
    </svg>
  );
}
export default Figure;
