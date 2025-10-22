import { Page, Layout, Banner, Text } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

export default function App() {
  return (
    <Page title="Thank You Page Extension">
      <Layout>
        <Layout.Section>
          {/* Your app content here */}
          <Banner>
            <p>Manage your Thank You page extension here.</p>
          </Banner>
        </Layout.Section>

        {/* Footer banner */}
        <Layout.Section>
          <div
            style={{
              marginTop: "20px",
              padding: "12px 0",
              borderRadius: "12px",
              textAlign: "center",
              background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
              color: "#fff",
              fontWeight: "600",
              fontSize: "14px",
              letterSpacing: "0.5px",
            }}
          >
            Designed & Developed by <a href="https://busytech.co" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline" }}>BusyTech.co</a>
          </div>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
