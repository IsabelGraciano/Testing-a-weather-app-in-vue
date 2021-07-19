import { shallowMount } from '@vue/test-utils'
import Weather from '@/components/Weather'
import Vue from 'vue'

describe('Testing the Weather component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Weather, {
            propsData: {
                city: '',
                weatherSummary: '',
                weatherDescription: '',
                currentTemperature: 0.0,
                lowTemperature: 0.0,
                highTemperature: 0.0
            }
        })
    })

    it('Emits when the clear button is clicked', () => {
        wrapper.setProps({
            city: 'Medellin',
            weatherSummary: 'Clouds',
            weatherDescription: 'scattered clouds',
            currentTemperature: 66.06,
            lowTemperature: 66.08,
            highTemperature: 67.77
        })

        wrapper.vm.clearWeather()
        expect(wrapper.emitted('clear-weather-data')).toBeTruthy()
    })

    it('Searches a city', async() => {

        //cuando tiene props acceso a ellos así
        wrapper.setProps({
            city: 'Medellin',
            weatherSummary: 'Clouds',
            weatherDescription: 'scattered clouds',
            currentTemperature: 66.06,
            lowTemperature: 66.08,
            highTemperature: 67.77
        })
        await Vue.nextTick();

        expect(wrapper.vm.city).toMatch('Medellin')
        expect(wrapper.vm.weatherSummary).toMatch('Clouds')
        expect(wrapper.vm.weatherDescription).toMatch('scattered clouds')
        expect(wrapper.vm.currentTemperature).toBeCloseTo(66.06)
        expect(wrapper.vm.lowTemperature).toBeCloseTo(66.08)
        expect(wrapper.vm.highTemperature).toBeCloseTo(67.77)

        expect(wrapper.findAll('p').at(0).text()).toMatch('City: Medellin')
        expect(wrapper.findAll('p').at(1).text()).toMatch('Summary: Clouds')
        expect(wrapper.findAll('p').at(2).text()).toMatch('Details: scattered clouds')
        expect(wrapper.findAll('p').at(3).text()).toMatch('Current: 66.06° F')
        expect(wrapper.findAll('p').at(5).text()).toMatch('Low (Today): 66.08° F')
        expect(wrapper.findAll('p').at(4).text()).toMatch('High (Today): 67.77° F')
    })
})