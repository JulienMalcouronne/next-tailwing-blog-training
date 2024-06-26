import parse, { Element } from 'html-react-parser';

const PostBody = ({ body }: { body: string }) => {
  const options = {
    replace: (domNode: any) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === 'img') {
          const { src, alt } = domNode.attribs;
          return (
            <Image
              className="rounded-md w-full object-cover object-center my-3 h-auto max-h-[300px] md:max-h-[500px]"
              src={src}
              alt={alt}
              width={1200}
              height={620}
            />
          );
        }
      }
    },
  };
  const getParseHtml = (body: string) => {
    return parse(body, options);
  };
  return <div className="rich-text">{getParseHtml(body)}</div>;
};

export default PostBody;
