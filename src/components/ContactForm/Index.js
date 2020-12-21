import React from 'react';
import { Button } from '../ButtonElement';

import {
    Form,
    WrapperGrid,
    StyledButton,
    StyledTitle,
    Container,
    Textarea,
    Input,
    Label
} from './ContactElements'


const ContactForm = () => (
    <Container id="contact">
        <StyledTitle>Let's work <Label>together</Label> <br/> Just send me email here</StyledTitle>
        <Form action="mailto:ilie.oana27@gmail.com" method="post" enctype="text/plain">
            <WrapperGrid>
                <Input type="text" id="name" name="name" placeholder="Name"/>
            </WrapperGrid>
            <WrapperGrid>
                <Input type="email" id="email" name="email" placeholder="Email" />
            </WrapperGrid>
            <WrapperGrid full>
                <Textarea name="message" rows="7" placeholder="Message"></Textarea>
            </WrapperGrid>
            
            <StyledButton>
                <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    primary={false}
                    > Submit </Button>
            </StyledButton>
        </Form>
        
    </Container>
)

export default ContactForm