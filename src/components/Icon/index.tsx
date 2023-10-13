import { IconKind } from '@type/styles/icon';
import { IconType } from 'react-icons/lib';
import {
  MdMap,
  MdHome,
  MdAccountCircle,
  MdSchool,
  MdNotifications,
  MdMenu,
  MdArrowBackIos,
  MdAddCircleOutline,
  MdChevronRight,
  MdOutlineModeEdit,
  MdOutlineQuestionAnswer,
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
  MdOutlineCancel,
  MdCampaign,
  MdOutlineRestartAlt,
  MdOutlineSearch,
  MdLocalPrintshop,
  MdHandshake,
  MdEditDocument,
  MdPersonSearch,
  MdOutlineLightbulb,
  MdOutlineMyLocation,
  MdOutlineError,
} from 'react-icons/md';

const ICON: { [key in IconKind]: IconType } = {
  home: MdHome,
  map: MdMap,
  accountCircle: MdAccountCircle,
  menu: MdMenu,
  notification: MdNotifications,
  school: MdSchool,
  arrowBack: MdArrowBackIos,
  plus: MdAddCircleOutline,
  edit: MdOutlineModeEdit,
  suggest: MdOutlineQuestionAnswer,
  right: MdChevronRight,
  cancel: MdOutlineCancel,
  reset: MdOutlineRestartAlt,
  speaker: MdCampaign,
  search: MdOutlineSearch,
  print: MdLocalPrintshop,
  handshake: MdHandshake,
  document: MdEditDocument,
  personSearch: MdPersonSearch,
  light: MdOutlineLightbulb,
  uncheckedRadio: MdRadioButtonUnchecked,
  checkedRadio: MdRadioButtonChecked,
  location: MdOutlineMyLocation,
  warning: MdOutlineError,
};

interface IconProps {
  kind: IconKind;
  onClick?: () => void;
  color?: string;
  size?: string;
}

const Icon = ({ kind, ...props }: IconProps) => {
  const TargetIcon = ICON[kind];
  return <TargetIcon size={28} {...props} />;
};

export default Icon;
