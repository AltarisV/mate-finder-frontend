import { mount } from '@vue/test-utils'
import MateView from '@/views/MateView'
import MateCardList from '@/components/MateCardList'
import MateCreateForm from '@/components/MateCreateForm'

describe('Testing MateView', () => {
  it('should have MateCard component', () => {
  // when
    const wrapper = mount(MateView)
    // then
    const cardList = wrapper.findComponent(MateCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should show page title', () => {
    const wrapper = mount(MateView)

    // then
    expect(wrapper.text()).toMatch('Here are the Mate Drinks we know.')
  })

  it('should have MateCreateForm component', () => {
    const wrapper = mount(MateView)

    // then
    const createForm = wrapper.findComponent(MateCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
