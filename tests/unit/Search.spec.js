import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search'

describe('Testing the search component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Search)
    })

    it('initializes with the correct values', () => {
        //correct names in buttons
        expect(wrapper.find('[id="submit"]').text()).toBe('Search')
        expect(wrapper.find('[id="reset"]').text()).toBe('Clear')

        //disabled buttons
        expect(wrapper.find('[id="submit"]').element.disabled).toBeTruthy()
        expect(wrapper.find('[id="reset"]').element.disabled).toBeTruthy()

        //correct texts
        expect(wrapper.find('h2').text()).toBe('Weather Search')
        expect(wrapper.find('input').text()).toBe('')

    })

    it('enable buttons when there is a text in the input field', () => {
        wrapper.find('[id="cityInput"]').setValue("RandomCity")
        expect(wrapper.find('[id="submit"]').element.enable).toBeFalsy()
        expect(wrapper.find('[id="reset"]').element.enable).toBeFalsy()

    })

    it('Clear the search ield', () => {
        //nota: cuando dentro de data se pone return se puede acceder a los attr dentro así
        wrapper.setData({ inputCity: 'Random city' })
        wrapper.find('[id="reset"]').trigger('click')
        expect(wrapper.find('[id="cityInput"]').element.value).toBe('')
    })

    it('Emit when searching a city', async() => {
        wrapper.setData({ inputCity: 'Random city' })
        wrapper.vm.searchCity()

        expect(wrapper.emitted('search-city')).toBeTruthy()
        expect(wrapper.emitted('search-city')[0][0]).toMatch('Random city')
    })
})