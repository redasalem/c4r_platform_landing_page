import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import car1 from '@/assets/car-1.jpg';
import car2 from '@/assets/car-2.jpg';
import car3 from '@/assets/car-3.jpg';
import car4 from '@/assets/car-4.jpg';

const products = [
  { id: 1, name: 'Luxury Sports Car', category: 'Sports', image: car1 },
  { id: 2, name: 'Premium SUV', category: 'SUV', image: car2 },
  { id: 3, name: 'Executive Sedan', category: 'Sedan', image: car3 },
  { id: 4, name: 'Electric Vehicle', category: 'Electric', image: car4 },
];

export const Products = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            {t('products.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="transition-smooth"
            >
              <Card className="overflow-hidden shadow-card hover:shadow-hover transition-smooth border-border h-full bg-card">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">
                    Premium quality vehicle with modern features
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    {t('products.viewDetails')}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
