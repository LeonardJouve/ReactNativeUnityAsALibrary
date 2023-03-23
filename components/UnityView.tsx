import React from 'react';
import {requireNativeComponent, ViewProps} from 'react-native';

const NativeUnityView = requireNativeComponent('UnityView');

type Props = ViewProps;

const UnityView: React.FC<Props> = (props: Props) => <NativeUnityView {...props}/>;

export default UnityView;
