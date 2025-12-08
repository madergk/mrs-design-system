/**
 * Icon Component
 *
 * A Material UI Icon component that wraps SvgIcon and provides a convenient
 * way to use Material Icons by name. Based on MUI Icon API documentation.
 * Supports all icon variants from Figma design.
 */

import React from 'react';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { SvgIconOwnProps } from '@mui/material/SvgIcon';

// Import all Material Icons used in the design
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import ContentPasteRoundedIcon from '@mui/icons-material/ContentPasteRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import InfoOutlineRoundedIcon from '@mui/icons-material/InfoOutlineRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import TimelapseRoundedIcon from '@mui/icons-material/TimelapseRounded';
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

/**
 * Icon name type - all available icon names from Figma design
 */
export type IconName =
  | 'AccountCircleRounded'
  | 'AddRounded'
  | 'ArrowBackRounded'
  | 'ArrowDownwardRounded'
  | 'ArrowDropDownRounded'
  | 'ArrowDropUpRounded'
  | 'ArrowForwardRounded'
  | 'ArrowUpwardRounded'
  | 'CheckBoxOutlineBlankRounded'
  | 'CheckBoxRounded'
  | 'CheckCircleOutlineRounded'
  | 'CheckCircleRounded'
  | 'CheckRounded'
  | 'ChevronLeftRounded'
  | 'ChevronRightRounded'
  | 'CloseRounded'
  | 'ContentCopyRounded'
  | 'ContentPasteRounded'
  | 'DeleteOutlineRounded'
  | 'DeleteRounded'
  | 'DownloadRounded'
  | 'EditRounded'
  | 'ErrorOutlineRounded'
  | 'ErrorRounded'
  | 'ExpandLessRounded'
  | 'ExpandMoreRounded'
  | 'GroupRounded'
  | 'HelpOutlineRounded'
  | 'IndeterminateCheckBoxRounded'
  | 'InfoOutlineRounded'
  | 'InfoRounded'
  | 'LockRounded'
  | 'LoginRounded'
  | 'LogoutRounded'
  | 'MenuRounded'
  | 'MoreHorizRounded'
  | 'MoreVertRounded'
  | 'NotificationsNoneRounded'
  | 'NotificationsRounded'
  | 'PersonAddRounded'
  | 'PersonOutlineRounded'
  | 'PersonRounded'
  | 'RadioButtonCheckedRounded'
  | 'RadioButtonUncheckedRounded'
  | 'RemoveRedEyeRounded'
  | 'ReportProblemRounded'
  | 'SaveAltRounded'
  | 'SearchRounded'
  | 'SendRounded'
  | 'SettingsRounded'
  | 'SupervisorAccountRounded'
  | 'TimelapseRounded'
  | 'UploadRounded'
  | 'VisibilityOffRounded'
  | 'WarningAmberRounded';

/**
 * Icon name to component mapping
 */
const iconMap: Record<IconName, React.ComponentType<SvgIconProps>> = {
  AccountCircleRounded: AccountCircleRoundedIcon,
  AddRounded: AddRoundedIcon,
  ArrowBackRounded: ArrowBackRoundedIcon,
  ArrowDownwardRounded: ArrowDownwardRoundedIcon,
  ArrowDropDownRounded: ArrowDropDownRoundedIcon,
  ArrowDropUpRounded: ArrowDropUpRoundedIcon,
  ArrowForwardRounded: ArrowForwardRoundedIcon,
  ArrowUpwardRounded: ArrowUpwardRoundedIcon,
  CheckBoxOutlineBlankRounded: CheckBoxOutlineBlankRoundedIcon,
  CheckBoxRounded: CheckBoxRoundedIcon,
  CheckCircleOutlineRounded: CheckCircleOutlineRoundedIcon,
  CheckCircleRounded: CheckCircleRoundedIcon,
  CheckRounded: CheckRoundedIcon,
  ChevronLeftRounded: ChevronLeftRoundedIcon,
  ChevronRightRounded: ChevronRightRoundedIcon,
  CloseRounded: CloseRoundedIcon,
  ContentCopyRounded: ContentCopyRoundedIcon,
  ContentPasteRounded: ContentPasteRoundedIcon,
  DeleteOutlineRounded: DeleteOutlineRoundedIcon,
  DeleteRounded: DeleteRoundedIcon,
  DownloadRounded: DownloadRoundedIcon,
  EditRounded: EditRoundedIcon,
  ErrorOutlineRounded: ErrorOutlineRoundedIcon,
  ErrorRounded: ErrorRoundedIcon,
  ExpandLessRounded: ExpandLessRoundedIcon,
  ExpandMoreRounded: ExpandMoreRoundedIcon,
  GroupRounded: GroupRoundedIcon,
  HelpOutlineRounded: HelpOutlineRoundedIcon,
  IndeterminateCheckBoxRounded: IndeterminateCheckBoxRoundedIcon,
  InfoOutlineRounded: InfoOutlineRoundedIcon,
  InfoRounded: InfoRoundedIcon,
  LockRounded: LockRoundedIcon,
  LoginRounded: LoginRoundedIcon,
  LogoutRounded: LogoutRoundedIcon,
  MenuRounded: MenuRoundedIcon,
  MoreHorizRounded: MoreHorizRoundedIcon,
  MoreVertRounded: MoreVertRoundedIcon,
  NotificationsNoneRounded: NotificationsNoneRoundedIcon,
  NotificationsRounded: NotificationsRoundedIcon,
  PersonAddRounded: PersonAddRoundedIcon,
  PersonOutlineRounded: PersonOutlineRoundedIcon,
  PersonRounded: PersonRoundedIcon,
  RadioButtonCheckedRounded: RadioButtonCheckedRoundedIcon,
  RadioButtonUncheckedRounded: RadioButtonUncheckedRoundedIcon,
  RemoveRedEyeRounded: RemoveRedEyeRoundedIcon,
  ReportProblemRounded: ReportProblemRoundedIcon,
  SaveAltRounded: SaveAltRoundedIcon,
  SearchRounded: SearchRoundedIcon,
  SendRounded: SendRoundedIcon,
  SettingsRounded: SettingsRoundedIcon,
  SupervisorAccountRounded: SupervisorAccountRoundedIcon,
  TimelapseRounded: TimelapseRoundedIcon,
  UploadRounded: UploadRoundedIcon,
  VisibilityOffRounded: VisibilityOffRoundedIcon,
  WarningAmberRounded: WarningAmberRoundedIcon,
};

/**
 * Icon component props
 * Extends MUI SvgIconProps and adds icon name prop
 */
export interface IconProps extends Omit<SvgIconProps, 'children' | 'color' | 'fontSize'> {
  /**
   * The name of the icon to display
   * @default 'AddRounded'
   */
  name?: IconName;
  /**
   * The color of the component
   * @default 'inherit'
   */
  color?: SvgIconProps['color'] | undefined;
  /**
   * The size of the component
   * @default 'medium'
   */
  fontSize?: SvgIconProps['fontSize'] | undefined;
}

/**
 * Icon component
 *
 * A wrapper around MUI's SvgIcon that provides a convenient way to use
 * Material Icons by name. Supports all MUI Icon props including color,
 * fontSize, and sx for custom styling.
 *
 * @example
 * ```tsx
 * <Icon name="AddRounded" color="primary" fontSize="large" />
 * <Icon name="CheckRounded" sx={{ color: 'success.main' }} />
 * ```
 */
export const Icon = React.forwardRef<React.ElementRef<'svg'>, IconProps>(
  ({ name = 'AddRounded', color, fontSize, ...props }, ref) => {
    const IconComponent = iconMap[name];

    const iconProps: SvgIconOwnProps = {
      ...props,
    };

    if (color !== undefined) {
      iconProps.color = color;
    }
    if (fontSize !== undefined) {
      iconProps.fontSize = fontSize;
    }

    if (!IconComponent) {
      console.warn(`Icon "${name}" not found. Using default icon.`);
      const DefaultIcon = iconMap.AddRounded;
      return <DefaultIcon ref={ref} {...iconProps} />;
    }

    return <IconComponent ref={ref} {...iconProps} />;
  }
);

Icon.displayName = 'Icon';

export default Icon;
