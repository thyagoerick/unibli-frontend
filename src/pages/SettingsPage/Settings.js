import Redirect from '../RedirectPage/Redirect';
import styles from './styles/Settings.module.css';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { TabView, TabPanel } from 'primereact/tabview';



const Settings = () => {
  return (
    <div className={styles.main}>
      <TabView>
        <TabPanel leftIcon="pi pi-user-edit" header="Editar conta">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </TabPanel>
        <TabPanel leftIcon="pi pi-trash" header="Deletar conta">
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
      </TabView>
    </div>


    // <div className={styles.tamanhoTela}>Settings</div>
  )
}

export default withAuthenticationRequired(Settings, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => (<Redirect />)
});