import { render, screen } from "@testing-library/react";
import Placeholder from './../../../components/common/Placeholder';

describe('renders contentent depending on loading state', () => {

    test('renders content if not loading', () => {
        render(<Placeholder isLoading={false}>test</Placeholder>)
        expect(screen.queryByText('test')).toBeInTheDocument()
    })

    test('doesnt render content while loading', () => {
        render(<Placeholder isLoading={true}>test</Placeholder>)
        expect(screen.queryByText('test')).not.toBeInTheDocument()
    })

})