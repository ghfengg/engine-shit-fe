import player1 from '@/assets/player/greenteck.jpg';
import player2 from '@/assets/player/Popping C.jpg';
import { TrophyFilled } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Slider, Typography } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';

const { Title } = Typography;

const JudgeSystem: React.FC = () => {
  const [balance, setBalance] = useState(50); // 50表示中间位置

  const handleBalanceChange = (value: number) => {
    setBalance(value);
  };

  return (
    <div className={styles.container}>
      <Title level={2} className={styles.pageTitle}>
        街舞比赛评分系统
      </Title>

      <div className={styles.battleContainer}>
        <Row className={styles.playersRow}>
          <Col span={12} className={styles.playerRed}>
            <Card className={styles.playerCard}>
              <div className={styles.playerInfo}>
                <Avatar size={120} src={player1} />
                <Title level={3}>Green Teck</Title>
                <div className={styles.score}>{balance}%</div>
              </div>
            </Card>
          </Col>
          <Col span={12} className={styles.playerBlue}>
            <Card className={styles.playerCard}>
              <div className={styles.playerInfo}>
                <Avatar size={120} src={player2} />
                <Title level={3}>Popping C</Title>
                <div className={styles.score}>{100 - balance}%</div>
              </div>
            </Card>
          </Col>
        </Row>

        <div className={styles.balanceContainer}>
          <div className={styles.resultIndicator}>
            {balance > 50 ? '红方领先' : balance < 50 ? '蓝方领先' : '平局'}
          </div>
          <div className={styles.sliderWrapper}>
            <Slider
              value={balance}
              onChange={handleBalanceChange}
              step={10}
              marks={{
                0: '红方',
                50: '平局',
                100: '蓝方',
              }}
              className={styles.battleSlider}
              handleStyle={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
              }}
            />
            <TrophyFilled
              className={styles.sliderHandle}
              style={{
                left: `${balance}%`,
                color: '#FFD700', // 添加金色
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgeSystem;
