import { RadioCard } from "@chakra-ui/react";

type Props = {
  index: number;
  label: string;
  isChecked: boolean;
  onClick: () => void;
};

export const RadioCardNav = ({ index, label, isChecked, onClick }: Props) => {
  return (
    <RadioCard.Item
      value={index.toString()}
      bg={"gray.100"}
      borderRadius={0}
      borderColor={"white"}
      borderWidth={0}
      borderLeftWidth={index === 0 ? 0 : 1}
      boxShadow={"none"}
      color={"gray.500"}
      cursor="pointer"
      w={"calc(100% / 12)"}
      h={11}
      transitionDuration={"0.2s"}
      _checked={{
        bg: "gray.400",
        color: "white",
      }}
      _hover={{
        bg: isChecked ? "gray.400" : "gray.300",
        color: isChecked ? "white" : "gray.500",
      }}
      aria-checked={isChecked}
      onClick={onClick}
    >
      <RadioCard.ItemHiddenInput />
      <RadioCard.ItemControl>
        <RadioCard.ItemText fontSize={"md"}>{label}</RadioCard.ItemText>
      </RadioCard.ItemControl>
    </RadioCard.Item>
  );
};
