import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Article = styled.article`
  border-style: solid;
  border-radius: 1rem;
  padding: 1rem;
  border-color: rgba(0, 0, 0, 0.1);
  max-width: 32rem;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;
`;

export const Main = styled.main`
    padding: 2rem;
    color : color: rgba(0, 0, 0, .8);
`;
export const FormContainer = styled.form`
  max-width: 30em;
`;

export const FieldSet = styled.fieldset`
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
`;

export const Legend = styled.legend`
  font-size: 5rem;
  font-weight: 600;
  max-width: 100%;
  margin-left: 2.12rem;
  margin-right: 0;
  padding: 0;
`;
export const Container = styled.div`
  margin-top: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export const Input = styled.input`
  border-style: solid;
  border-width: 0.1rem;
  padding: 0.5rem;
  background-color: transparent;
  width: 100%;
  &:hover {
    background-color: #000;
  }
  &:focus {
    color: #fff;
  }
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const TextArea = styled.textarea`
  border-style: solid;
  border-width: 1px;
  padding: 0.5rem;
  background-color: transparent;
  width: 100%;
  &:hover {
    background-color: #000;
  }
  &:focus {
    color: #fff;
  }
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const Button = styled.input`
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  &:hover,
  :focus {
    transform: scale(1.05);
    cursor: pointer;
  }
  font-weight: 600;
  display: inline-block;
`;

export const LinkContainer = styled.div`
  line-height: 1.5;
  font-weight: 600;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  transition: color 0.15s ease-in;
  &:link,
  :visited,
  :hover {
    transition: color 0.15s ease-in;
  }
`;
