import { Telemetry } from './src/index'

const sendEvent = <K extends Telemetry.EventName>(
  action: K,
  customProperties?: Telemetry.EventProps<K>
) => {
  const properties = !!customProperties ? customProperties : {}
  console.log(action, properties)
}

console.log(sendEvent('sign_up'))

// console.log(sendEvent('sign_in', {}))

console.log(
  sendEvent('$pageleave', {
    current_url: 'http://localhost:3000',
    pathname: '/studio',
  })
)

console.log(
  sendEvent('$pageview', {
    current_url: 'http://localhost:3000',
    page_title: 'Studio',
    pathname: '/studio',
  })
)

// console.log(
//   sendEvent('$pageview', {
//     current_url: 'http://localhost:3000',
//     page_title: 'Studio',
//   })
// )
