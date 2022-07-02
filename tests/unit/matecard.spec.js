import { mount } from '@vue/test-utils'
import MateCard from '@/components/MateCard'

describe('Testing MateCard', () => {
  it('should render name and price', () => {
    // when
    const testMate = {
      id: 1,
      name: 'Club-Mate',
      price: 1.19
    }
    const wrapper = mount(MateCard, {
      propsData: {
        mate: testMate
      }
    })
    // then
    const cardHeader = wrapper.find('.card-header')
    expect(cardHeader.text()).toBe(`${testMate.name}`)
  })
})
