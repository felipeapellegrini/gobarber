import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';
import { useField } from '@unform/core'; // hook que recebe o nome do campo e retorna várias props

interface InputProsps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProsps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  {
    /* vou inicializar nulo e passar o ref do meu
  input pra cá, associando à variável, daí posso manipular como eu quiser */
  }
  const { fieldName, defaultValue, error, registerField } = useField(name);
  /* o registerField é o registro que precisa fazer do input, assim que o
componente for exibido em tela, por isso, vou utilizar o useEffect */
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  );
};

export default Input;
