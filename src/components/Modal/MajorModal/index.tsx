import Button from '@components/Button';
import Icon from '@components/Icon';
import { css } from '@emotion/react';
import { THEME } from '@styles/ThemeProvider/theme';

import Modal from '..';

interface MajorModalProps {
  onClose: () => void;
  routerTo: () => void;
}

const MajorModal = ({ onClose, routerTo }: MajorModalProps) => {
  return (
    <Modal onClose={onClose}>
      <>
        <span
          css={css`
            color: ${THEME.TEXT.GRAY};
            font-weight: bold;
            margin: 0 auto;
            margin-bottom: 15px;
          `}
        >
          아직 학과를 알려주지 않았어요
        </span>
        <Button onClick={routerTo}>
          <Icon kind="plus" color={THEME.TEXT.WHITE} />
          <span>학과 선택하기</span>
        </Button>
      </>
    </Modal>
  );
};

export default MajorModal;
