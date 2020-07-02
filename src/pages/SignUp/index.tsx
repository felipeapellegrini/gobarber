import React from 'react';
import { Container, Content, Background } from './styles';
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="#">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
