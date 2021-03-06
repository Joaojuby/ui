import React from 'react';
import PropTypes from 'prop-types';
import strings from 'lang';
import heroes from 'dotaconstants/build/heroes.json';

import styles from './PicksBans.css';

const PicksBans = ({ data }) => (
  <div className={styles.PicksBans}>
    {data.map(pb => (
      <section key={pb.order}>
        <img
          src={`${API_HOST}${heroes[pb.hero_id].img}`}
          alt=""
          className={styles.image}
          data-isPick={pb.is_pick}
        />
        {!pb.is_pick && <div className={styles.ban} />}
        <aside>
          {pb.is_pick ? strings.match_pick : strings.match_ban} <b>{pb.order + 1}</b>
        </aside>
      </section>
    ))}
  </div>
);

PicksBans.propTypes = {
  data: PropTypes.shape({}),
};

export default PicksBans;
