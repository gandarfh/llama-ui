import {
  AlignmentProps,
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexProps,
  GridProps,
  InteractionsProps,
  LayoutProps,
  PositionsProps,
  PseudosProps,
  SpacesProps,
  TransformsProps,
  TypographyProps,
} from '..'

export interface StylesConfigProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    PositionsProps,
    FlexProps,
    GridProps,
    InteractionsProps,
    LayoutProps,
    SpacesProps,
    TransformsProps,
    TypographyProps,
    AlignmentProps {}

export interface StylesProps extends StylesConfigProps, PseudosProps {}
