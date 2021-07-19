import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header'

describe('Testing the header component', () => {
    it('render the title', () => {
        const wrapper = shallowMount(Header, {
            propsData: {
                title: 'random title'
            }
        })

        expect(wrapper.text()).toBe('random title')
    })
})