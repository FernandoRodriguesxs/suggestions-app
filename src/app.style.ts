import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: 32px;
  margin: 0 auto;
`

export const AdviceSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .advice-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 350px;
    padding: 46px;
    gap: 24px;

    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
    border-radius: 12px;

    background-color: #dbf4bc;

    h1 {
      color: #882e48;
    }

    h2 {
      color: #882e48;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      height: 64px;
      width: 180px;
      border: 1px solid #f656a0;
      border-radius: 16px;
      background: #f656a0;
      color: white;
      font-weight: 900;
      font-size: 18px;
      cursor: pointer;
    }
  }
`
