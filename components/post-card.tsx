import React from 'react';
import Link from 'next/link';
import { SimpleImg } from 'react-simple-img';

import unsplashParams from '~/utils/unsplash-params';
import { ImageType } from '~/components/header/image';
import { formatPostDate, iso8601 } from '~/utils/dates';
import getCloudinaryURL from '~/utils/get-cloudinary-url';

export interface Post {
  title: string;
  date: string;
  image: ImageType;
  editUrl: string;
  path: string;
  lastEdited?: string;
}

const imageHeight = 200;

const PostCard: React.FC<Post> = ({ path, image, date, title }) => {
  const hasImageAuthor = image.photographer != null;
  const hasImageSrc = image.url != null;
  const image1x = getCloudinaryURL(image.imageUrl, [`h_${imageHeight}`]);
  const image2x = getCloudinaryURL(image.imageUrl, [`h_${imageHeight * 2}`]);
  const image3x = getCloudinaryURL(image.imageUrl, [`h_${imageHeight * 3}`]);
  return (
    <Link href={path}>
      <a className="overflow-hidden text-gray-800 transition-shadow duration-200 bg-white rounded-lg shadow-md w-100 ease-ease hover:shadow-2xl">
        <div className="h-80">
          <SimpleImg
            data-testid="post-image"
            placeholder={false}
            height={200}
            width="100%"
            src={image1x}
            alt={title}
            srcSet={`${image1x} 1x, ${image2x} 2x, ${image3x} 3x`}
            data-photo={
              hasImageAuthor ? `Taken by ${image.photographer}` : undefined
            }
            data-source-url={
              hasImageSrc ? unsplashParams(image.url) : undefined
            }
            className="object-cover h-80"
          />
        </div>
        <div className="pt-6 pb-10 pl-8 pr-8">
          <h2 className="mb-4 text-4xl font-bold" data-testid="post-title">
            {title}
          </h2>
          <time
            className="text-2xl font-normal text-gray-600"
            data-testid="post-date"
            dateTime={iso8601(date)}
          >
            {formatPostDate(date)}
          </time>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
