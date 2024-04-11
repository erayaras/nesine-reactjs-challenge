import React from 'react';
import { useBet } from './../../../contexts/BetContext';
import styles from './BetSummary.module.scss';
import { Bet } from '../../../services/bets/bets.types';
const BetSummary: React.FC = () => {
  const { state, dispatch } = useBet();

  const handleCartItemDelete = (bet: any) => {
    if (bet) {
      const MBS = bet.MBS;
      const ID = bet.ID;
      const { C, N } = bet; // Extracting the required C and N properties from the bet object
      const parsedO = parseFloat(bet.O.toString());


      dispatch({ type: 'REMOVE_BET', payload: { MBS, C, N, O: parsedO, ID } });
    }
  };

  return (
    <div className={styles.betBox}>
      {state.selectedBets.map((bet, index) => (
        <div className={styles.betLine}>
          <div onClick={() => handleCartItemDelete(bet)}>
            x
          </div>
          <div key={index} className={styles.bet}>
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
        </div>
      ))}
      <div >Toplam Tutar: {state.totalAmount} TL</div>
    </div>
  );
};

export default BetSummary;
