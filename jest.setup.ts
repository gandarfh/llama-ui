import '@testing-library/jest-dom'

import { matchers } from '@emotion/jest'
import { toHaveNoViolations } from 'jest-axe'

expect.extend(matchers)
expect.extend(toHaveNoViolations)
