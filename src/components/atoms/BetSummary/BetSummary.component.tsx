import React from 'react';
import { useBet } from './../../../contexts/BetContext';
import styles from './BetSummary.module.scss';

const BetSummary: React.FC = () => {
  const { state } = useBet();

  return (
    <div className={styles.betBox}>
      {state.selectedBets.map((bet, index) => (
        <div key={index} className={styles.betLine}>
          <div className={styles.preMatchContent}>
            {bet.MBS} Kod: {bet.C}
          </div>
          <div className={styles.matchName}>
            Maç: {bet.N}
          </div>
          <strong>
            Oran: {bet.O}
          </strong>
        </div>
      ))}
      <div>Toplam Tutar: {state.totalAmount} TL</div>
    </div>
  );
};

export default BetSummary;
