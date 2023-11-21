import { initGlobalState } from "qiankun";
import type {  MicroAppStateActions } from "qiankun";

const initialState = { count:0}; // 全局状态池给了个默认值
const shareActions: MicroAppStateActions = initGlobalState(initialState);

export default shareActions;