import { GetServerSideProps } from "next";
import { spreadsheets } from "../data/spreadsheets";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const sheet = spreadsheets.find((s) => s.slug === slug);

  if (!sheet) {
    return {
      notFound: true,
    };
  }

  // Redirect directly to the spreadsheet URL
  return {
    redirect: {
      destination: sheet.url,
      permanent: false,
    },
  };
};

export default function SpreadsheetRedirect() {
  return null;
}
