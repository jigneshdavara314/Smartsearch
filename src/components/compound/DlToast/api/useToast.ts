import { isVue3 } from 'vue-demi'
import toastComponent from '../components/ToastComponent.vue'
import { createComponent } from '../utils/render'
import { v4 } from 'uuid'
import { DlToastProps, DlToastTypes } from '../types'

const state: { prevToastId: any; toasts: { [key: string]: any } } = {
    prevToastId: null,
    toasts: {}
}

export const useToast = (globalProps = {}) => {
    return {
        open(options: DlToastProps | string) {
            let message = null
            if (typeof options === 'string') message = options

            const defaultProps = {
                message,
                identifier: v4()
            }

            const propsData = Object.assign(
                {},
                defaultProps,
                globalProps,
                options,
                {
                    remove: () => {
                        delete state.toasts[defaultProps.identifier]
                    }
                }
            )

            if (state.prevToastId && state.toasts[state.prevToastId]) {
                const toast = state.toasts[state.prevToastId]
                const props = isVue3 ? toast.props : toast.$children[0]
                const similar =
                    propsData.message === props.message &&
                    propsData.type === props.type
                if (similar) {
                    if (isVue3) {
                        toast.proxy.updateCount(toast.proxy.count + 1)
                    } else {
                        toast.$children[0].updateCount(
                            toast.$children[0].count + 1
                        )
                    }
                    return
                }
            }

            state.prevToastId = defaultProps.identifier
            state.toasts[defaultProps.identifier] = createComponent(
                toastComponent,
                propsData,
                document.body
            )
        },
        success(options: DlToastProps | string) {
            let props: Partial<DlToastProps> = {}
            if (typeof options === 'string') {
                props.message = options
            } else {
                props = options
            }

            this.open({ ...props, type: DlToastTypes.SUCCESS } as DlToastProps)
        },
        error(options: DlToastProps | string) {
            let props: Partial<DlToastProps> = {}
            if (typeof options === 'string') {
                props.message = options
            } else {
                props = options
            }

            this.open({ ...props, type: DlToastTypes.ERROR } as DlToastProps)
        },
        info(options: DlToastProps | string) {
            let props: Partial<DlToastProps> = {}
            if (typeof options === 'string') {
                props.message = options
            } else {
                props = options
            }

            this.open({ ...props, type: DlToastTypes.INFO } as DlToastProps)
        },
        warn(options: DlToastProps | string) {
            let props: Partial<DlToastProps> = {}
            if (typeof options === 'string') {
                props.message = options
            } else {
                props = options
            }

            this.open({ ...props, type: DlToastTypes.WARNING } as DlToastProps)
        }
    }
}
