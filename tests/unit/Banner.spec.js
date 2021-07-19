import { shallowMount } from '@vue/test-utils'
import Banner from '@/components/Banner'

describe('Testing the banner component', () => {
    let wrapper

    it('initialize with empty values', () => {
        wrapper = shallowMount(Banner, {
            propsData: {
                bannerMessage: '',
                bannerType: ''
            }
        })

        expect(wrapper.vm.bannerMessage).toBe('')
        expect(wrapper.vm.bannerType).toBe('')
        expect(wrapper.vm.bannerBackgroundColor).toBe('blue')
    })

    it('Renders correctly an error message', () => {
        wrapper = shallowMount(Banner, {
            propsData: {
                bannerMessage: 'Random error message',
                bannerType: 'Error'
            }
        })

        expect(wrapper.vm.bannerMessage).toBe('Random error message')
        expect(wrapper.vm.bannerType).toBe('Error')
        expect(wrapper.vm.bannerBackgroundColor).toBe('red')
    })

    it('Renders correctly a success message', () => {
        wrapper = shallowMount(Banner, {
            propsData: {
                bannerMessage: 'Random success message',
                bannerType: 'Success'
            }
        })

        expect(wrapper.vm.bannerMessage).toBe('Random success message')
        expect(wrapper.vm.bannerType).toBe('Success')
        expect(wrapper.vm.bannerBackgroundColor).toBe('green')
    })

    it('Clears the banner', async() => {
        wrapper = shallowMount(Banner, {
            propsData: {
                bannerMessage: 'Random error message',
                bannerType: 'Error'
            }
        })

        await wrapper.find('[id="errorMessageClear"]').trigger('click')
        expect(wrapper.emitted('clear-banner')).toBeTruthy()
    })
})