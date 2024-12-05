import { LoadingOverlay, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

const useGetSearchResult = () => {
  return useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      const resp = await fetch(
        "https://g0hwq37vtd.execute-api.us-east-1.amazonaws.com/invoice-data"
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Credentials": true,
        //     "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PUT,DELETE,PATCH",
        //   },
        // }
      );
      const data = await resp.json();
      return data;
    },
  });
};

export default function Invoice() {
  const { data, isLoading } = useGetSearchResult();
  //   const invoiceData = data ? JSON.parse(data) : null;
  if (isLoading && !data?.data) {
    return <LoadingOverlay />;
  }
  //   const text = data?.data.replace("\n>", "");

  //   const jsonForText = JSON.parse(`${text}`);
  //   console.log(jsonForText);
  return (
    <>
      <div>
        <Text>{JSON.stringify(data)}</Text>
      </div>
    </>
  );
}
