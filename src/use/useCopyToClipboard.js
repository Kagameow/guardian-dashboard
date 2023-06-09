import { ElNotification } from 'element-plus'
export function useCopyToClipboard() {
        async function copyToClipboard(copyText) {
        try {
            await navigator.clipboard.writeText(copyText)
            ElNotification.success({
                title: 'Copied successfully!',
                position: 'top-right',
                zIndex: 100000
            })
        } catch (err) {
            ElNotification({
                title: 'Prompt',
                message: 'This is a message that does not automatically close',
                duration: 0,
            })
        }
    }

    return {
        copyToClipboard,
    }
}

export default useCopyToClipboard
