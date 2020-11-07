import { initNativeApi } from './apis';
export { initNativeApi };
export * from './components';
export * from './apis-list';
export declare const hostConfig: {
    initNativeApi: typeof initNativeApi;
    getEventCenter(Events: any): any;
    modifyDispatchEvent(event: any, tagName: any): void;
};
