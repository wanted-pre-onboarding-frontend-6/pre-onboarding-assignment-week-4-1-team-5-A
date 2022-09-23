import Button from 'components/Button/Button';
import ListTable from 'container/ListTable/Table';

const AccountListPage = () => {
  return (
    <div>
      <h1>accountlist Page</h1>
      <ListTable type="account" />

      <Button variant="primary" shape="round" size="small">
        확인
      </Button>
      <Button variant="text" shape="round" size="small">
        확인
      </Button>
      <Button variant="reverse" shape="round" size="small">
        확인
      </Button>
      <Button variant="primary-text" shape="round" size="small">
        확인
      </Button>

      <Button variant="primary" shape="default" size="small">
        확인
      </Button>
      <Button variant="text" shape="default" size="small">
        확인
      </Button>
      <Button variant="reverse" shape="default" size="small">
        확인
      </Button>
      <Button variant="primary-text" shape="default" size="small">
        확인
      </Button>

      <Button variant="primary" shape="round" size="medium">
        확인
      </Button>
      <Button variant="text" shape="round" size="medium">
        확인
      </Button>
      <Button variant="reverse" shape="round" size="medium">
        확인
      </Button>
      <Button variant="primary-text" shape="round" size="medium">
        확인
      </Button>

      <Button variant="primary" shape="round" size="large">
        확인
      </Button>
      <Button variant="text" shape="round" size="large">
        확인
      </Button>
      <Button variant="reverse" shape="round" size="large">
        확인
      </Button>
      <Button variant="primary-text" shape="round" size="large">
        확인
      </Button>

      <Button variant="primary" shape="round" size="full">
        확인
      </Button>
      <Button variant="text" shape="round" size="full">
        확인
      </Button>
      <Button variant="reverse" shape="round" size="full">
        확인
      </Button>
      <Button variant="primary-text" shape="default" size="full">
        확인
      </Button>
    </div>
  );
};
export default AccountListPage;
