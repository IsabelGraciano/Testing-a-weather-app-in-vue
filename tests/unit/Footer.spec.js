import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer'

describe('Testing the Footer component', () => {
    it('render the message', () => {
        const wrapper = shallowMount(Footer, {
            propsData: {
                message: 'random message'
            }
        })

        expect(wrapper.text()).toBe('random message')
    })
})